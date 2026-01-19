import React from "react";
import ContainerBlock from "../components/ContainerBlock";
import PersonalSpace from "../components/PersonalSpace";

export default function PersonalSpacePage() {
  return (
    <ContainerBlock title="Personal Space - Ramya">
      <div className="py-10"> 
        <PersonalSpace />
      </div>
    </ContainerBlock>
  );
}