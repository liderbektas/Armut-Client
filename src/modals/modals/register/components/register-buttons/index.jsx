import {createModal} from "../../../../../store/modal/actions/actions";
import Button from "../../../../../components/button";

export default function RegisterButtons({form}) {

    return (
        <>
            <div className="relative my-8 flex items-center gap-2">
                <div className="flex-1 border-t border-gray-300"></div>
                <span
                    onClick={() => createModal("login")}
                    className="text-gray-500 font-medium text-sm whitespace-nowrap cursor-pointer hover:text-gray-700"
                >
                    Zaten bir hesabım var
                </span>
                <div className="flex-1 border-t border-gray-300"></div>
            </div>

            <div className="grid gap-y-2">
                <Button
                    as="button"
                    variant="filled-button"
                    size="large"
                    type="submit"
                >
                    Hesap Oluştur
                </Button>
            </div>
        </>
    )
}