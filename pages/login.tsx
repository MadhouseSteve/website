// @ts-ignore
import Layout from "./components/layout";
import styles from "./login.module.css";

export default function Login() {
    return (
        <div className={"mx-auto max-w-md bg-white rounded p-6 border border-gray-300 shadow-lg"}>
            <form>
                <div className={"form_group"}>
                    <label className={"form_label"}>
                        Email Address
                        <input type={"text"} id={"email"} className={"form_input"} />
                    </label>
                </div>

                <div className={"form_group"}>
                    <label className={"form_label"}>
                        Password
                        <input type={"password"} id={"password"} className={"form_input"} />
                    </label>
                </div>

                <div className={"form_group flex justify-end items-center"}>
                    <button type={"submit"} className={"primary-button"}>Log In</button>
                </div>
            </form>
        </div>
    )
}

Login.getLayout = function getLayout(page) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}