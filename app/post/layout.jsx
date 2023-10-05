
import Navigation from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';

export default function Layout({ children }) {
    return (
        <section>
            <Navigation />
            {children}
            <Footer />
        </section>
    );
}