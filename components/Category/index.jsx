import { Link } from "@nextui-org/react";

export default function Category() {
    return (
        < aside className="w-1/4 p-4 bg-white rounded-lg relative" >
            {/* Category List */}
            < div
                className="fixed cate-container"
                style={{
                    maxHeight: "calc(100vh - 2rem)", // Adjust the height as needed
                    overflowY: "auto",
                }
                }
            >
                <h2 className="text-xl font-semibold mb-4 text-gray-800">
                    Categories
                </h2>

                <ul className="list-none p-0 cate-ul">
                    <li className="mb-2">
                        <Link
                            color="primary"
                            hoverColor="secondary"
                            underline
                            href="#"
                        >
                            Linux
                        </Link>
                    </li>
                    <li className="mb-2">
                        <Link
                            color="primary"
                            hoverColor="secondary"
                            underline
                            href="#"
                        >
                            JavaScript
                        </Link>
                    </li>

                    <li className="mb-2">
                        <Link
                            color="primary"
                            hoverColor="secondary"
                            underline
                            href="#"
                        >
                            TypeScript
                        </Link>
                    </li>
                    <li className="mb-2">
                        <Link
                            color="primary"
                            hoverColor="secondary"
                            underline
                            href="#"
                        >
                            Backend
                        </Link>
                    </li>
                    <li className="mb-2">
                        <Link
                            color="primary"
                            hoverColor="secondary"
                            underline
                            href="#"
                        >
                            Frontend
                        </Link>
                    </li>
                    <li className="mb-2">
                        <Link
                            color="primary"
                            hoverColor="secondary"
                            underline
                            href="#"
                        >
                            DevOps
                        </Link>
                    </li>
                    {/* Add more categories as needed */}
                </ul>
            </div >
        </aside >
    )
}
