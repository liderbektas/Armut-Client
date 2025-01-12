import LoginModal from "./modals/login";
import PhoneModal from "./modals/phone";
import AddressModal from "./modals/address";
import RegisterModal from "./modals/register";
import ActiveRequestModal from "./modals/request/active";
import InactiveRequestModal from "./modals/request/inactive";
import ServeModal from "./modals/serve";
import OpportunitiesModal from "./modals/opportunities";
import OfferModal from "./modals/offer";
import OfferDescriptionModal from "./modals/offer-description";
import FinishJobModal from "./modals/finish-job";
import RateModal from "./modals/rate";
import UserCommentModal from "./modals/user-comment";

const modals = [
    {
        name: "login",
        element: LoginModal
    },
    {
        name: "phone",
        element: PhoneModal
    },
    {
        name: "address",
        element: AddressModal
    },
    {
        name: "register",
        element: RegisterModal
    },
    {
        name: "active-request",
        element: ActiveRequestModal
    },
    {
        name: "inactive-request",
        element: InactiveRequestModal
    },
    {
        name: "serve",
        element: ServeModal
    },
    {
        name: "opportunity",
        element: OpportunitiesModal
    },
    {
        name: "offer",
        element: OfferModal
    },
    {
        name: "offer-description",
        element: OfferDescriptionModal
    },
    {
        name: "finish-job",
        element: FinishJobModal
    },
    {
        name : "rate",
        element: RateModal
    },
    {
        name : "user-comment",
        element: UserCommentModal
    }
]

export default modals;