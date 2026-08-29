"use client";

import { useState } from "react";
import { getLeads } from "@/actions/leadActions";
import { Lock, Search, Download, Loader2 } from "lucide-react";

export default function LeadsPage() {
  const [passcode, setPasscode] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [leads, setLeads] = useState<any[]>([]);

  const handleAuthenticate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const result = await getLeads(passcode);
      if (result.success && result.leads) {
        setLeads(result.leads);
        setIsAuthenticated(true);
      } else {
        setError(result.message || "Authentication failed");
      }
    } catch (err) {
      setError("An error occurred connecting to the database.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg border border-gray-100 p-8">
          <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto">
            <Lock className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold text-center text-[var(--primary)] mb-2">Restricted Access</h1>
          <p className="text-gray-500 text-center mb-8 text-sm">Please enter your passcode to view the leads dashboard.</p>
          
          <form onSubmit={handleAuthenticate}>
            <div className="mb-6">
              <input
                type="password"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="Enter passcode"
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent text-center tracking-widest text-lg"
                required
              />
              {error && <p className="text-red-500 text-sm mt-2 text-center">{error}</p>}
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[var(--primary)] text-white py-3 rounded-md font-medium hover:bg-[var(--secondary)] transition-colors flex items-center justify-center gap-2"
            >
              {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Access Dashboard"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-[var(--primary)] mb-2">Leads Dashboard</h1>
            <p className="text-gray-500">Manage and track your consultation requests.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search leads..." 
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              />
            </div>
            <button className="flex items-center gap-2 bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors text-sm font-medium">
              <Download className="w-4 h-4" />
              Export CSV
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200 text-gray-500 text-xs uppercase tracking-wider">
                  <th className="p-4 font-semibold">Date</th>
                  <th className="p-4 font-semibold">Name</th>
                  <th className="p-4 font-semibold">Contact</th>
                  <th className="p-4 font-semibold">Preferences</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {leads.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="p-8 text-center text-gray-500">
                      No leads found in the database.
                    </td>
                  </tr>
                ) : (
                  leads.map((lead) => (
                    <tr key={lead._id} className="hover:bg-gray-50 transition-colors">
                      <td className="p-4 align-top">
                        <div className="text-sm text-gray-900 font-medium">{new Date(lead.createdAt).toLocaleDateString()}</div>
                        <div className="text-xs text-gray-500">{new Date(lead.createdAt).toLocaleTimeString()}</div>
                      </td>
                      <td className="p-4 align-top">
                        <div className="text-sm font-medium text-gray-900">{lead.name}</div>
                        <div className="text-xs text-gray-500 bg-gray-100 inline-block px-2 py-1 rounded mt-1">{lead.source}</div>
                      </td>
                      <td className="p-4 align-top">
                        <div className="text-sm text-gray-900">{lead.email}</div>
                        <div className="text-sm text-gray-500">{lead.phone}</div>
                      </td>
                      <td className="p-4 align-top">
                        <div className="text-sm text-gray-900 font-medium">{lead.preferredCountry || "-"}</div>
                        <div className="text-xs text-gray-500 line-clamp-2 max-w-[150px]">{lead.preferredCourse || "-"}</div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
