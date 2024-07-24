import React from "react";

function Background() {

    return(
        <div className=" relative w-4/5 h-36 my-11 rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <div className="absolute top-20 flex justify-center w-full ">
                <img src="/images/Profile.png" alt="" />
            </div>
        </div>
    )
}

export default Background;