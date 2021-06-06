export default function lazyCallBack(section = "section") {
    if (section === "root") {
        // This should render an animated loading icon
        return <h2 id='loading'>Please wait while our application loads.</h2>
    }

    return <p id='loading'>This {section} is currently loading...</p>
}