import Rating from "react-rating";
import {AiOutlineStar, AiFillStar} from "react-icons/ai";
import {useState} from "react";
import {IoClose} from "react-icons/io5";
import {destroyAllModal, destroyModal} from "../../../store/modal/actions/actions";
import {MdOutlineKeyboardArrowLeft} from "react-icons/md";
import Button from "../../../components/button";
import {useAuth} from "../../../store/hooks/hooks";
import {createRate} from "../../../api/rate/put";


export default function RateModal({data}) {

    const {user} = useAuth()
    const [rating, setRating] = useState(0);

    const handleRatingChange = (value) => {
        setRating(value);
    };

    const {comment} = data

    const singleRate = data.data?.reduce((acc, curr) => {
        if (!acc[curr.id]) {
            acc = curr
        }
        return acc;
    }, {})

    const handleSubmit = async () => {
        createRate(singleRate, user, comment, rating)
        destroyAllModal()
    };

    return (
        <div className="p-5 w-[500px] bg-white rounded-md shadow-lg">
            <header className="flex items-center justify-between">
                <MdOutlineKeyboardArrowLeft onClick={destroyModal} className="cursor-pointer"/>
                <span className="text-sm font-medium">Aldığın hizmeti puanlandır</span>
                <IoClose onClick={destroyAllModal} className="text-2xl cursor-pointer"/>
            </header>

            <div className="flex items-center justify-center pt-10">
                <Rating
                    initialRating={rating}
                    emptySymbol={<AiOutlineStar className="text-gray-400 text-5xl"/>}
                    fullSymbol={<AiFillStar className="text-primary text-5xl"/>}
                    fractions={2}
                    onChange={handleRatingChange}
                />
            </div>

            <div className="mt-4 grid">
                <Button onClick={handleSubmit} as="button" type="submit" variant="filled-button" size="x-large">
                    Gönder
                </Button>
            </div>
        </div>
    );
}
