import Layout from "./components/layout";

export default function Home() {
    // @ts-ignore
    return (
        <div>Hello, world</div>
    )
}

Home.getLayout = function getLayout(page) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}