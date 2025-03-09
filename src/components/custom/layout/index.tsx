import Footer from '../footer';
import NavBar from '../navbar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <NavBar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
