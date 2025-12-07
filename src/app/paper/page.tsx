import {notFound} from "next/navigation";
import {Metadata} from "next";


export const metadata:Metadata={
    title:"Paper",
    description:"Paper"
}

const PaperIndexPage = () => {
    notFound();
}
export default PaperIndexPage
