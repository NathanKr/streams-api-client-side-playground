<h2>Motivation</h2>
Experiment with streams API which read data by chunks. So you might present real progress to the user

<h2>Points of interest</h2>
<ul>
<li>the Streaming API is a javascript API thus can be used on the client and server (??). I prefer to use on client and most easy is react</li>
</ul>

<h2>Open issues</h2>
<ul>
<li>is it used in <a href='https://nextjs.org/docs/advanced-features/react-18/streaming'>react 18 streaming SSR</a> seems yes because it is used in <a href='https://react.dev/reference/react-dom/server/renderToReadableStream'>renderToReadableStream</a> but there is also renderToPipeableStream and renderToStaticNodeStream which uses node streams. So which is used ??</li>
</ul>
