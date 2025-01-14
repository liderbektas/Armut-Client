import {motion} from 'framer-motion'
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import ConfirmUser from "./components/confirmed-user";
import UnapprovedUser from "./components/unapproved-user";

export default function UserPage() {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            className="text-white p-5">
            <Tabs>
                <TabList className="flex gap-x-2 rounded-md px-5 h-10 justify-center items-center">
                    <Tab
                        className="rounded-md text-zinc-500 p-1 cursor-pointer transition-all duration-200 text-sm px-5 text-center aria-selected:bg-[#27272a] aria-selected:shadow aria-selected:text-primary">
                        Onaylı Kullanıcılar
                    </Tab>
                    <Tab
                        className="rounded-md text-zinc-500 p-1 cursor-pointer transition-all duration-200 text-sm px-5 text-center aria-selected:bg-[#27272a] aria-selected:shadow aria-selected:text-primary">
                        Onay Bekleyen Kullanıcılar
                    </Tab>
                </TabList>

                <div className="pt-10">
                    <TabPanel className="flex justify-between w-full">
                        <ConfirmUser/>
                    </TabPanel>
                    <TabPanel>
                        <UnapprovedUser/>
                    </TabPanel>
                </div>
            </Tabs>

        </motion.div>
    )
}