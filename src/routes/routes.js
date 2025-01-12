import {createBrowserRouter} from "react-router-dom";
import Weblayout from "../layout/web-layout";
import HomePage from "../pages/home";
import VerifiedLayout from "../layout/verified-layout";
import AccountLayout from "../layout/account-layout";
import AccountDetails from "../pages/account/pages/accound-details";
import ChangePassword from "../pages/account/pages/change-password";
import PaymentMethod from "../pages/account/pages/payment-method";
import Contact from "../pages/account/pages/contact";
import HelpCenter from "../pages/account/pages/help-center";
import DataPrivacy from "../pages/account/pages/data-privacy";
import Serve from "../pages/account/pages/serve";
import MyWorkPage from "../pages/my-work";
import MyWorkLayout from "../layout/my-work-layout";
import QuestionsLayout from "../layout/questions-layout";
import QuestionsPage from "../pages/questions";
import ServerLayout from "../layout/serve-layout";
import MyServe from "../pages/serve/pages/my-serve";
import AddServe from "../pages/serve/pages/add-serve";
import ServeDetails from "../pages/serve/pages/serve-details";
import MyOpportunites from "../pages/serve/pages/my-opportunites";
import OfferPage from "../pages/serve/pages/offer";
import UserInformationLayout from "../layout/user-profile-layout";
import MyJob from "../pages/serve/pages/my-job";
import MessagesLayout from "../layout/messages-layout";
import MessagePage from "../pages/message";
import UserProfilePage from "../pages/user-profile";

export const routes = createBrowserRouter(
    [
        {
            path: '/',
            element: <Weblayout/>,
            children: [
                {
                    index: true,
                    element: <HomePage/>
                }
            ]
        },
        {
            path: '/hesap-onayla',
            element: <VerifiedLayout/>
        },
        {
            path: "/hesabım",
            element: <AccountLayout/>,
            children: [
                {
                    path: "/hesabım/hesap-detayları",
                    element: <AccountDetails/>
                },
                {
                    path: "/hesabım/sifre-degistir",
                    element: <ChangePassword/>
                },
                {
                    path: "/hesabım/odeme-secenekleri",
                    element: <PaymentMethod/>
                },
                {
                    path: "/hesabım/armuta-ulaş",
                    element: <Contact/>
                },
                {
                    path: "/hesabım/yardım-merkezi",
                    element: <HelpCenter/>
                },
                {
                    path: "/hesabım/veri-ve-gizlilik",
                    element: <DataPrivacy/>
                },
                {
                    path: "/hesabım/hizmet-ver",
                    element: <Serve/>
                },
            ],
        },
        {
            path: "/islerim",
            element: <MyWorkLayout/>,
            children: [
                {
                    index: true,
                    element: <MyWorkPage/>,
                },
            ]
        },
        {
            path: "/sorular/:id",
            element: <QuestionsLayout/>,
            children: [
                {
                    index: true,
                    element: <QuestionsPage/>
                }
            ]
        },
        {
            path: "/hizmet-ver",
            element: <ServerLayout/>,
            children: [
                {
                    path: "/hizmet-ver/fırsatlarım",
                    element: <MyOpportunites/>
                },
                {
                    path: "/hizmet-ver/islerim",
                    element: <MyJob/>
                },
                {
                    path: "/hizmet-ver/hizmetlerim",
                    element: <MyServe/>
                },
                {
                    path: "/hizmet-ver/hizmet-ekle",
                    element: <AddServe/>
                },
                {
                    path: "/hizmet-ver/hizmet-detay/:id",
                    element: <ServeDetails/>
                },
                {
                    path: "/hizmet-ver/tekliflerim",
                    element: <OfferPage/>
                }
            ]
        },
        {
            path: "/kullanici-detay",
            element: <UserInformationLayout/>,
            children: [
                {
                    path: "/kullanici-detay/:userId",
                    element: <UserProfilePage/>
                }
            ]
        },
        {
            path: "/mesajlas",
            element: <MessagesLayout/>,
            children: [
                {
                    path: "/mesajlas/:toUserId",
                    element: <MessagePage/>
                },
            ]
        }
    ]
)