// @ts-ignore
import Layout from "./components/layout";

export default function Login() {
    return (
        <div>Login</div>
    )
}

Login.getLayout = function getLayout(page) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}