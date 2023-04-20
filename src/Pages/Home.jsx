import React from "react"
import CarouselComponent from "../Components/CarouselComponent"
import { Button, Card } from "flowbite-react"
import Card2Component from "../Components/Card2Component"

const Home = () => {
  return (
    <>
      <CarouselComponent />

      <h3 className="font-bold text-2xl flex flex-col items-center py-10">Dashboard</h3>
      <Card className="mx-10">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Lorem ipsum dolor sit.
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis natus, praesentium neque quia vel repudiandae!
        </p>
        <Button>
          Read more
          <svg
            className="ml-2 -mr-1 h-4 w-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Button>
      </Card>

      <h3 className="font-bold text-2xl flex flex-col items-center py-10">Lorem, ipsum dolor</h3>
      <div className="grid gap-y-4 sm:grid-cols-3 grid-cols-1 mb-10">
        <Card2Component />
        <Card2Component />
        <Card2Component />
        <Card2Component />
        <Card2Component />
        <Card2Component />
      </div>
    </>
  )
}
export default Home