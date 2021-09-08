import { useRouter } from "next/router";

export default function PageNo() {
    const routes=useRouter()
    const pagenumber=routes.query.PageNo;
    console.log(routes ,"....")
    return (
        <div>
            <h1>welcome to..{pagenumber}</h1>
        </div>
    )
}
