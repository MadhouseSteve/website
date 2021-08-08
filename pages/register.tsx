// @ts-ignore
import Layout from "./components/layout";

export default function Register() {
    return (
        <div>Register</div>
    )
}

Register.getLayout = function getLayout(page) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}