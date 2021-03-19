import Head from 'next/head'

export default function Heading({description, keywords, title}){
    return (
        <Head>
            <title>{title}</title>
            <meta charSet="UTF-8" />
            <meta
                name="description"
                content={description}
            />
            <meta
                name="keywords"
                content={keywords}
            />
            <meta name="author" content="Mattia Ferrari" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <link rel="icon" href="dragun.ico" type="image/x-icon" />
        </Head>
    );
}