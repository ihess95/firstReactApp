import React from "react"
import Header from "./Header"
import MainContent from "./MainContent"
import Footer from "./Footer"

export default function App(){
    return(
        <div className="body">
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}