import Content from "../components/admin/Content";
import Header from "../components/admin/Header";

function AdminPage() {
  return (
    <div className="dark text-foreground bg-background w-screen h-fit min-h-screen p-8 flex flex-col">
      <Header />
      <Content />
    </div>
  );
}

export default AdminPage;
