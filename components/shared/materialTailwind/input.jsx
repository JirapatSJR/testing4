'use client'
import { Input } from "@material-tailwind/react";
 
export default function InputTM ({classname , label }) {
  return (
    <div className={classname}>
      <Input label={label}/>
    </div>
  );
}