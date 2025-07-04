import { Notepad } from "@/components/notepad/Notepad";
import { Toolbar } from "@/components/notepad/Toolbar";
import { SettingsModal } from "@/components/notepad/SettingsModal";
import { MainLayout } from "@/layouts/MainLayout";

export default function Home() {
  return (
    <>
      <MainLayout page="home" header={<Toolbar />} className="container">
        <Notepad />
        <SettingsModal />
      </MainLayout>
    </>
  );
}
