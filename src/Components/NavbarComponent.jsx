import { useState, useEffect } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../img/logo.png'
import { getAuth, signOut } from 'firebase/auth'

const NavbarComponent = () => {

    const navigate = useNavigate()
    const handleLogout = () => {
        const auth = getAuth()
        signOut(auth)
            .then((result) => {
                localStorage.clear()
                navigate('/login')
            })
            .catch((err) => {
                console.error(err)
            })
    }

    // Dark Mode
    const getStoredTheme = () => {
        const storedTheme = localStorage.getItem('theme');
        return storedTheme || 'light'; // Jika tidak ada tema yang disimpan, gunakan tema default 'light'
      };

    const [theme, setTheme] = useState(getStoredTheme())
    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [theme])

    const handleThemeSwitch = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    }

    const navigation = [
        { name: 'Home', link: '/' },
        { name: 'Top Rated', link: '/top-rated' },
        { name: 'About', link: '/about' },
    ]

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className="bg-white">

            {/* Start Navbar */}
            <header className="absolute inset-x-0 top-0 z-50">
                <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <Link to="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Mahardhika</span>
                            <img
                                className="h-10 w-auto"
                                src={Logo}
                                alt="logo"
                            />
                        </Link>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6 dark:text-white" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.link}
                                className="text-sm font-semibold leading-6 dark:text-white text-gray-900 transition-all hover:text-gray-500">
                                {item.name}
                            </Link>
                        ))}
                        <span className='-mx-5 dark:text-white'>|</span>
                        <button
                            onClick={handleLogout}
                            className="text-sm font-semibold leading-6 text-red-600 transition-all hover:text-red-700 hover:border-b-2 hover:-mb-1 border-red-600">
                            Logout
                        </button>
                        <button
                            onClick={handleThemeSwitch}
                            className="text-sm font-semibold leading-6 text-gray-600 hover:text-gray-900 transition-all"
                        >
                            {theme === 'dark' ?  (
                                <SunIcon className="h-5 w-5 text-white" aria-hidden="true" />
                            ) : (
                                <MoonIcon className="h-5 w-5" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </nav>

                <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-50" />
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:bg-slate-900">
                        <div className="flex items-center justify-between">
                            <Link to="/" className="-m-1.5 p-1.5">
                                <span className="sr-only">Mahardhika</span>
                                <img
                                    className="h-10 w-auto"
                                    src={Logo}
                                    alt="logo"
                                />
                            </Link>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-white"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10 dark:divide-white">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            to={item.link}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-gray-800 transition-all"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                    <hr />
                                    <button
                                        onClick={handleLogout}
                                        className="text-sm font-semibold leading-6 text-red-600">
                                        Logout
                                    </button>
                                    <hr />
                                    <button
                                        onClick={handleThemeSwitch}
                                        className="text-sm font-semibold leading-6 text-gray-600 hover:text-gray-900 transition-all"
                                    >
                                        {theme === 'dark' ? (
                                            <SunIcon className="h-5 w-5 text-white" aria-hidden="true" />
                                        ) : (
                                            <MoonIcon className="h-5 w-5" aria-hidden="true" />
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </header>
            {/* End Navbar */}

        </div>
    )
}

export default NavbarComponent