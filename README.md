This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

To run the dev server run

```
yarn install
yarn run dev
```

## Description

This project is meant to be used as an exercise.

The exercise consists of developing 4 components (Nav, Returns, PlaceTrade and ActiveStrategies) defined in the page.js file. Each component will have to query a backend service for data and then show the data to the user. We want to know how you interact with figma and how you configurate a new design system following the shared figma files.

### Backend API Description

URL: https://dummy-backend-rttuh5f3wq-uc.a.run.app/

Endpoints:

1. get /navs
   Returns an object with daily_navs and hourly_navs.

2. get /top_10
   Returns an object with the key "top_10" that has a list of the top 10 symbols

3. get /return\_{symbol}
   Returns a return for the given symbol with a delay.
   Only returns data for assets in top_10

4. post /place_trade/{symbol}
   Places a fake trade. Returns time, price and symbol index.
   Can randomly fail to return a valid response

## Instructions

Develop a webapp configurating a tailwind file with our current desing system that interacts with a test backend in 3 ways.

1. Nav (No design, feel free here)

Make a request to the /navs endpoint to get the historical navs of a user. Plot the data in a line chart.
Data should be available for the last 24 hours, 7 days, 30 days and YTD.

2. Returns (No design, feel free here)

Get a list of the top 10 symbols by calling the /top*10 endpoint. Then for each symbol call the /return*{symbol} endpoint to get the current return for it. Show each symbol with its return.

3. Place Trade (No design, feel free here)

Allow users to place trades. Create a simple form that allows a user to write the name of a symbol and click a "buy" button. Front end should then call the place_trade/{symbol} endpoint. Call can fail so the code needs to account for API call failing now and then. When the trade is placed show the results for each trade to the user in a list or table.

4. Active Strategies (Use tailwind as your css library and follow the figma files)

Get a list of active strategies from "src/utils/getStrategies.js" (mocked data). Show every strategy following the figma design.

## Design resources

Active Strategies Design:
https://www.figma.com/file/lxD8O5KfrDI7ovLnbDkmP7/Untitled?type=design&node-id=0%3A1&t=TuCQN9bMX0cP2o3I-1

Design System:
https://www.figma.com/file/UrOjaGSXrsNMhAUMv54f6R/Untitled?type=design&node-id=0%3A1&t=C6QAzj9a4JUdpPF7-1

## Local Server

To run local server:

`uvicorn main:app --host 127.0.0.1 --port 8080`

## Conclusion

In conclusion, this exercise was challenging and interesting—not so much due to technical difficulty, but rather its extensive nature. It demanded careful consideration of numerous details, constant decision-making, and the creation of a product design under time constraints.

Overall, I am very pleased with the results. Given more time, I would have developed additional data graphics and enhanced user interaction with the components. I enjoy creating minimalistic and effective designs, and I thoroughly enjoyed the construction process. The project's beautiful and attractive color palette facilitated the creation of this dashboard.

I hope you appreciate it as much as I enjoyed building it.

Best regards,

Caio

## Screenshots

https://ibb.co/5kF8g4s

https://ibb.co/MPY4PXr

https://ibb.co/RPvx79K

https://ibb.co/Kj8Y8rB

https://ibb.co/KL8dKS7
