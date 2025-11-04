import CheckboxButton from "./CheckboxButton"
export default function CheckList() {
    return (    
        <div class="
        box-border
        border border-transparent
        border-t border-b-0 border-l-0 border-r-0 }
        text-[14px]
        leading-[21px]
        font-sans
        h-[94.5px]
        w-[233px]
        p-[0px_21px_21px_21px]
        text-left
        m-0
        ">
            <div class="
                flex items-center
                h-[17.5px] w-[191px]
                text-[14px] leading-[21px]
                font-sans
                m-0 mb-[10.5px]
                p-0
                ">
                    <CheckboxButton/>
                    <span class="
                        block
                        w-[57.1562px] h-[17.5px]
                        text-[12.25px] leading-[17.5px]
                        text-[#9E2D38]  /* rgb(158,45,56) */
                        font-sans
                        text-left
                        ">
                        Awareness
                        </span>

            </div>

            <div class="
                flex items-center
                h-[17.5px] w-[191px]
                text-[14px] leading-[21px]
                font-sans
                m-0 mb-[10.5px]
                p-0
                ">
                     <CheckboxButton/>
                    <span class="
                        block
                        w-[57.1562px] h-[17.5px]
                        text-[12.25px] leading-[17.5px]
                        text-[rgb(102,102,102)]  
                        font-sans
                        text-left
                        ">
                        Consideration
                        </span>
            </div>

            <div class="
                flex items-center
                h-[17.5px] w-[191px]
                text-[14px] leading-[21px]
                font-sans
                m-0 mb-[10.5px]
                p-0
                ">
                    <CheckboxButton/>
                    <span class="
                        block
                        w-[57.1562px] h-[17.5px]
                        text-[12.25px] leading-[17.5px]
                        text-[rgb(43,90,122)]  
                        font-sans
                        text-left
                        ">
                        Purchase
                        </span>
            </div>

    </div>

    )
}   
