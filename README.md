# TicketmasterExplorer
A small web app that uses the ticketmaster discovery api to show relevant events.

## How to set up

This project was set up using [NX](https://nx.dev).

Follow the instructions in the ./src/Readme.md file

<em>Note: I'd recommend using VSCode and installing the nrwl.angular-console extension</em>

## Steps
1: Clone the repo,
2: Open in VSCode or other editor,
3: Open a terminal and navigate to `cd .\ticketmaster-explorer\src\` (I set up the repo in Github first before setting up the project so it's nested),
4: Run `npm i` to install all dependencies,
5: If you have the NX Console extension open it up (You'll need to click the button to set the workspace path on first use), then open the ticketmaster-explorer project to see all build options,
6: Hover over start and a play icon should appear on the right of the menu, click it to run `nx run ticketmaster-explorer:start` (or type that in the terminal if youd prefer),
7: Clicking the play icon for test runs the unit test suite, or alternatively `nx test ticketmaster-explorer`

## About this project
I was budgeted around 3 hours. In all honesty I went over and probably spent around 5 or 6 with some stops, starts, and distractions over a couple days. There were plenty of occasions where I lost track of time started to over-engineer solutions but had to pull back and do something simpler due to the time and scope (it's easy to forget this isn't in an enterprise and going to be used by others).

In the places where I've gone down one track and had to pull back I've left the code there commented out so you can see what I was wanting to do.

### What it's missing and ideal next steps
- Error handing
I've put in veeeery basic error handling (catch and throw essentially) for the most part. I'd ideally have a more elegant way to handle errors (displaying form errors below inputs, toast box for showing a service failed etc).

- CSS Props
I've only created 2 css props in the global stylesheet. Usually I'd set up any system values as props here and use them throughout the app <element>-<property>-<variation> e.g. text-color-primary.

- Componentisation
I've only really created 2 shared components and tried to make use of Angular Material in the grid-layout slot. This works fine really and I could go really hard on splitting them out, but I find that you can go way too far into splitting things into components.

- State
I'm a big fan of using rxjs subjects in services to store and retrieve state. It's simple and effective for the most part. The way I've set it up isn't particularly structured or elegant, but it does the trick for now.

- Reactivity
I like the reactive rxjs pattern a lot. It's applicable in most situations and when combined with async pipes in the template it's an easy way to ensure subscriptions aren't left open. Can be difficult to test though.

- Testing
I've always found testing to be one of the most difficult parts of software engineering. A good test suite is incredibly valuable and I appreciate them a loooot, but I'm admittedly terrible at writing good tests.
I've created a few basic pseudo tests for this exercise, but haven't spent too much time otherwise given the scope of it.

- Linting, naming, etc
These are severely under-rated in my experience. I'd usually set up prettier and eslint properly, and set up a pre-push git hook to run them. I'd also usually put more though into component and class naming (possibly use a system like BEM or similar depending on the code style guide of the project) as I believe good naming goes a long way to creating self documenting code.

- Structure
Given the time I haven't bothered splitting files into Core, Shared, and Feature folders, no interceptors, global or scoped things
