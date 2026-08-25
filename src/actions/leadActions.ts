"use server";

import dbConnect from "@/lib/db";
import Lead from "@/models/Lead";

export async function submitLead(formData: FormData) {
  try {
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
  const correctPasscode = process.env.LEADS_PASSCODE || "Arka2026";
  
  if (passcode !== correctPasscode) {
    return { success: false, message: "Invalid passcode" };
  }

  try {
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
