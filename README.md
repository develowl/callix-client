<h1 style="font-size: 40px; text-align: center;">Launches - Callix Client</h1>

## Getting Started

### Prerequisites

- Node.js installed
- Npm or yarn installed
- Google Analytics account
- Google Optimize account
- Hotjar account

#### 1. First, install the dependencies:

```bash
npm install
# or
yarn install
```

#### 2. Set environments properly in an `.env` file:

```sh
# .env.example
NEXT_PUBLIC_LAUNCHES_API=http://localhost:3333
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-A1B2C3D4E5
NEXT_PUBLIC_EXPERIMENT_ID=CNouaoqw91UASvGoKI9Ast
NEXT_PUBLIC_OPTIMIZE_ID=OPT-ADGKM0S
```

#### 3. Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

#### 4. And finally:

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Implementation

This project was created using the [Next.js](https://nextjs.org/docs) framework, a modern architecture for web development. For componentization and styling, the [Mantine.dev](https://mantine.dev/getting-started/) was used. In addition to integrations with [Google Analytics](https://analytics.google.com), [Google Optimize](https://optimize.google.com/) and [HotJar](https://www.hotjar.com). Finally, a [CI/CD pipeline](https://github.com/develowl/callix-client/actions) was created using a yaml configuration file, with GitHub workflow managing that process, and the deployment was made with [Docker](https://docker.com) and to top it off, the application was hosted in [Heroku](https://heroku.com), so it can be found at this address [Callix Client - Launches](https://callix-client-f98a40c71d17.herokuapp.com/).

## Routes

It only has one page, separated by following topics:

#### `Next launch`: Presents minimal informations about the next mission

#### `Latest launch`: Presents informations about the mission, the crew (when have it), a summary and mission photos

#### `Upcoming launches`: Presents minimal informations about the upcoming missions

#### `Past launches`: Presents minimal informations about the past missions, and has infinite scroll that requests older launches

## License

This project is licensed under the MIT license - see the LICENSE file for details.
