// @ts-ignore
import Layout from "./components/layout";
import styles from "./reset-password.module.css";

export default function ResetPassword() {
    return (
        <div className={"mx-auto max-w-md bg-white rounded p-6 border border-gray-300 shadow-lg"}>
            <form>
                <div className={"form_group"}>
                    <label className={"form_label"}>
                        Email Address
                        <input type={"text"} id={"email"} className={"form_input"} />
                    </label>
                </div>

                <div className={"form_group flex justify-end items-center"}>
                    <button type={"submit"} className={"primary-button"}>Request Password Reset</button>
                </div>
            </form>
        </div>
    )
}

ResetPassword.getLayout = function getLayout(page) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}