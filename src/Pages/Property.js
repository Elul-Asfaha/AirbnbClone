const Property=()=>{
    return(
            <div className="min-h-screen py-5 md:px-[5%]  md:pb-[13%] lg:pb-[5%] relative">

                <div className="flex flex-col justify-evenly gap-5">
                    <h2 className="flex text-3xl">Blue Horizon Villa Anatoli, 1BD, private pool</h2>
                    <div className="flex flex-wrap justify-between">
                        <div className="flex flex-wrap gap-3">
                            <p>
                                    star 5.0
                            </p>
                            <div className="flex font-bold underline">3 reviews</div>
                            <div>
                                !Superhost
                            </div>
                            <div className="flex font-bold underline">
                                <p>Rethimnon,<span>Greece</span></p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <p className="font-bold underline">share</p>
                            <p className="font-bold underline">save</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-x-4 justify-center items-center  rounded-xl overflow-hidden max-h-[500px]">
                    <img src="https://picsum.photos/500/500" alt="" className="container"/>
                    <div className="grid grid-cols-2 gap-2 max-h-[500px]">
                        <img src="https://picsum.photos/500/500"  alt="" className="container flex-1"/>
                        <img src="https://picsum.photos/500/500" alt="" className="container flex-1"/>
                        <img src="https://picsum.photos/500/500" alt="" className="container flex-1" />   
                        <img src="https://picsum.photos/500/500" alt="" className="container flex-1"/>
                    </div>
                </div>
            </div>
    )
}
export default Property