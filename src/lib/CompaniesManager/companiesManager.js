import {db} from "../js/db.js";

// Function to delete a company
export async function deleteCompany(companyId) {
    // await db.companies.delete(companyId);
}

// Function to edit a company
export async function editCompany(company) {
    // await db.companies.put(company);
}

// Function to open a company
// Depending on your application, you might want this to return
// some sort of indication that a company was successfully retrieved.
export async function openCompany(companyId) {
    // const company = await db.companies.where('id').equals(companyId).first();
    // return company;
}