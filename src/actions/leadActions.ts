"use server";

import fs from 'fs/promises';
import path from 'path';
import dbConnect from "@/lib/db";
import Lead from "@/models/Lead";

export async function submitLead(formData: FormData) {
  try {
    if (!process.env.MONGODB_URI) {
      console.warn("MONGODB_URI is not defined. Using local file storage.");
      const filePath = path.join(process.cwd(), 'leads.json');
      let leads = [];
      try {
        const fileData = await fs.readFile(filePath, 'utf-8');
        leads = JSON.parse(fileData);
      } catch (e) {
        // file doesn't exist yet
      }
      const data = {
        _id: Date.now().toString(),
        name: formData.get("name"),
        phone: formData.get("phone"),
        email: formData.get("email"),
        age: formData.get("age"),
        education: formData.get("education"),
        preferredCountry: formData.get("preferredCountry"),
        preferredCourse: formData.get("preferredCourse"),
        budget: formData.get("budget"),
        intake: formData.get("intake"),
        message: formData.get("message"),
        source: "Book Consultation Page",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      leads.unshift(data);
      await fs.writeFile(filePath, JSON.stringify(leads, null, 2));

      return { success: true, message: "Your counselling session has been requested successfully!" };
    }

    await dbConnect();

    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      age: formData.get("age"),
      education: formData.get("education"),
      preferredCountry: formData.get("preferredCountry"),
      preferredCourse: formData.get("preferredCourse"),
      budget: formData.get("budget"),
      intake: formData.get("intake"),
      message: formData.get("message"),
      source: "Book Consultation Page",
    };

    const lead = new Lead(data);
    await lead.save();

    return { success: true, message: "Your counselling session has been requested successfully!" };
  } catch (error) {
    console.error("Failed to submit lead:", error);
    return { success: false, message: "Failed to submit request. Please try again or contact us directly." };
  }
}

export async function getLeads(passcode: string) {
  const correctPasscode = process.env.LEADS_PASSCODE || "1234";
  
  if (passcode !== correctPasscode) {
    return { success: false, message: "Invalid passcode" };
  }

  try {
    if (!process.env.MONGODB_URI) {
      console.warn("MONGODB_URI is not defined. Using local file storage.");
      const filePath = path.join(process.cwd(), 'leads.json');
      let leads = [];
      try {
        const fileData = await fs.readFile(filePath, 'utf-8');
        leads = JSON.parse(fileData);
      } catch (e) {
        // file doesn't exist yet
      }
      return {
        success: true,
        leads: leads
      };
    }

    await dbConnect();
    // Use lean() for better performance and to convert mongoose docs to plain objects
    // Need to serialize the _id and createdAt to string to pass to client
    const leads = await Lead.find().sort({ createdAt: -1 }).lean();
    
    const serializedLeads = leads.map(lead => ({
      ...lead,
      _id: lead._id.toString(),
      createdAt: (lead as any).createdAt.toISOString(),
      updatedAt: (lead as any).updatedAt.toISOString(),
    }));

    return { success: true, leads: serializedLeads };
  } catch (error) {
    console.error("Failed to fetch leads:", error);
    return { success: false, message: "Database error" };
  }
}
