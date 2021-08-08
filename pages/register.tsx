// @ts-ignore
import Layout from "./components/layout";
import styles from "./register.module.css";

export default function Register() {
    return (
        <div className={"mx-auto max-w-lg bg-white rounded p-6 border border-gray-300 shadow-lg"}>
            <form>
                <div className={"form_group"}>
                    <label className={"form_label"}>
                        Email Address
                        <input type={"email"} name={"email"} id={"email"} className={"form_input"} />
                    </label>
                </div>

                <div className={"form_group"}>
                    <label className={"form_label"}>
                        Password
                        <input type={"password"} name={"password"} id={"password"} className={"form_input"} />
                    </label>
                </div>

                <div className={"form_group"}>
                    <label className={"form_label"}>
                        Confirm Password
                        <input type={"password"} name={"password_confirmation"} id={"password"} className={"form_input"} />
                    </label>
                </div>

                <div className={"form_group"}>
                    <label className={"form_label"}>
                        Minecraft Name
                        <input type={"text"} name={"minecraft_name"} id={"minecraft_name"} className={"form_input"} />
                    </label>
                </div>

                <div className={"form_group"}>
                    <label className={"form_label"}>
                        Date of Birth
                        <input type={"date"} name={"date_of_birth"} id={"date_of_birth"} className={"form_input"} />
                    </label>
                </div>

                <div className={"form_group"}>
                    <label className={"form_label"}>
                        Where did you hear about Madhouse Miners?
                        <input type={"text"} name={"referrer"} id={"referrer"} className={"form_input"} />
                    </label>
                </div>

                <div className={"form_group"}>
                    <label className={"form_label"}>
                        What experience do you have with modded Minecraft?
                        <input type={"text"} name={"experience"} id={"experience"} className={"form_input"} />
                    </label>
                </div>

                <div className={"form_group"}>
                    <label className={"form_label"}>
                        Do you know any other members of our community? If so, what is their minecraft name?
                        <input type={"text"} name={"know_anyone"} id={"know_anyone"} className={"form_input"} />
                    </label>
                </div>

                <div className={"form_group"}>
                    <label className={"form_label"}>
                        Which of our servers are you mainly interested in and why?
                        <input type={"text"} name={"interested_in"} id={"interested_in"} className={"form_input"} />
                    </label>
                </div>

                <div className={"form_group"}>
                    <label className={"form_label"}>
                        Tell us a bit about yourself (e.g. What mods are you mainly interest in, what style of building do you like to do?)
                        <input type={"text"} name={"about_you"} id={"about_you"} className={"form_input"} />
                    </label>
                </div>

                <div className={"form_group"}>
                    <p className={"font-semibold text-red-400"}>
                        By submitting this form you agree that we can store the above information in order to process
                        your whitelist application. We will store this information while your account is active.
                        If you wish for us to remove this information you can do so by contacting us on Discord.
                    </p>
                </div>

                <div className={"form_group flex justify-end items-center"}>
                    <button type={"submit"} className={"primary-button"}>Register</button>
                </div>
            </form>
        </div>
    )
}

Register.getLayout = function getLayout(page) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}