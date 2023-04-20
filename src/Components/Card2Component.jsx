import { Card } from "flowbite-react";
import React from "react";

const Card2Component = () => {
  return (
    <div className="max-w-sm ml-3">
      <Card imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        </p>
      </Card>
    </div>
  )
}
export default Card2Component