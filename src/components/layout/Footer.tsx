const Footer = () => {
    return (
        <footer className="bg-background border-t border-border py-12 mt-auto">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                    <h3 className="text-lg font-bold">ryandra.dev</h3>
                    <p className="text-sm text-muted-foreground mt-2">
                        Building digital experiences with passion and precision.
                    </p>
                </div>

                <div className="flex items-center space-x-6">
                    <a
                        href="https://github.com/Ryandra-TI01"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/ryandra-athaya-saleh-234161293"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="mailto:ryandra.athaya1705@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                        Email
                    </a>
                </div>

                <div className="text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} Ryandra Athaya Saleh. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;

