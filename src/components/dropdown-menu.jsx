import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';

const DropdownMenu = () => {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <MenuButton className="w-8 h-8 relative sm:hidden overflow-hidden bg-slate-300">
                <div className="w-8 h-8 left-0 top-0 absolute"></div>
                <div className="w-6 h-0 left-[5.67px] top-[8.50px] absolute outline outline-2 outline-offset-[-1px] outline-black rounded-full"></div>
                <div className="w-6 h-0 left-[5.67px] top-[17px] absolute outline outline-2 outline-offset-[-1px] outline-black rounded-full"></div>
                <div className="w-6 h-0 left-[5.67px] top-[25.50px] absolute outline outline-2 outline-offset-[-1px] outline-black rounded-full"></div>
            </MenuButton>
            <MenuItems className="absolute bg-slate-300 right-[-1.0rem] z-50 mt-2 w-screen origin-top-right shadow-lg">
                <div className="py-4">
                    <MenuItem>
                        {({ active }) => (
                            <a href="#home" className={`${active ? 'bg-slate-400' : ''} block px-4 py-2 text-black text-md font-semibold font-ubuntu uppercase`}>
                                HOME
                            </a>
                        )}
                    </MenuItem>
                    <MenuItem>
                        {({ active }) => (
                            <a href="#projects" className={`${active ? 'bg-slate-400' : ''} block px-4 py-2 text-black text-md font-semibold font-ubuntu uppercase`}>
                                PROJECTS
                            </a>
                        )}
                    </MenuItem>
                    <MenuItem>
                        {({ active }) => (
                            <a href="#contacts" className={`${active ? 'bg-slate-400' : ''} block px-4 py-2 text-black text-md font-semibold font-ubuntu uppercase`}>
                                CONTACTS
                            </a>
                        )}
                    </MenuItem>
                </div>
            </MenuItems>
        </Menu>
    );
};

export default DropdownMenu;