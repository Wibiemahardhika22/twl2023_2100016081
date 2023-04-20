import { Card } from "flowbite-react";
import React from "react";

const CardComponent = (props) => {
    return (
        <div className="max-w-sm mx-auto items-center pb-10">
            <Card>
                <div className="flex flex-col items-center pb-10">
                    <img
                        className="mb-3 h-24 w-24 rounded-full shadow-lg"
                        src="/images/profile.jpg"
                        alt="Profile image"
                    />
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                        {props.name}
                    </h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                        {props.id}
                    </span>
                    <p className="text-center mt-10">
                        {props.description}
                    </p>
                </div>
            </Card>
        </div>
    )
}
export default CardComponent