import React, { useRef, useLayoutEffect } from "react"
import gsap from "gsap";
import Introduction from "./Introduction";

function randomNumberInRange(min, max) {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

const Animation = () =>
{
    const comp = useRef();
    const a_letter = useRef();
    const b_letter = useRef();
    const c_letter = useRef();
    const d_letter = useRef();
    const e_letter = useRef();
    const f_letter = useRef();
    const g_letter = useRef();
    const h_letter = useRef();
    const i_letter = useRef();
    const min = -40
    const max = 40

    const tl = useRef()
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
        tl.current = gsap.timeline({defaults: { duration:.2, ease:"sine.out" }})
        .from(a_letter.current, {y:randomNumberInRange(min,max)})
        .to(a_letter.current, {y:0})
        .from(b_letter.current, {x:randomNumberInRange(min,max)})
        .to(b_letter.current, {x:0})
        .from(c_letter.current, {y:randomNumberInRange(min,max)})
        .to(c_letter.current, {y:0})
        .from(d_letter.current, {x:randomNumberInRange(min,max)})
        .to(d_letter.current, {x:0})
        .from(e_letter.current, {y:randomNumberInRange(min,max)})
        .to(e_letter.current, {y:0})
        .from(f_letter.current, {x:randomNumberInRange(min,max)})
        .to(f_letter.current, {x:0})
        .from(g_letter.current, {y:randomNumberInRange(min,max)})
        .to(g_letter.current, {y:0})
        .from(h_letter.current, {x:randomNumberInRange(min,max)})
        .to(h_letter.current, {x:0})
        .from(i_letter.current, {y:randomNumberInRange(min,max)})
        .to(i_letter.current, {y:0})
        });
        return ()=> ctx.revert();}, []);

    return(
        <div className="animation-letters">
            <p>B#L Project</p>
        </div>
    );
} 

export default Animation