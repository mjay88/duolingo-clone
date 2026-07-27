


//TODO: need to use isAdmin here

import { getIsAdmin } from "@/lib/admin";
import { redirect } from "next/navigation";
import { AdminClient } from "./admin-client";

const AdminPage = async () => {
const admin = await getIsAdmin();

if(!admin){
    redirect("/")
}
  return (
    <AdminClient />
  );
};

export default AdminPage;
