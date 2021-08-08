// @ts-ignore
import Layout from "./components/layout";

export default function ResetPassword() {
    return (
        <div>ResetPassword</div>
    )
}

ResetPassword.getLayout = function getLayout(page) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}