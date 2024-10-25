import { NextResponse } from "next/server";
import { watchList } from "../route";

export async function DELETE(_request: Request, { params }: { params: { id: string } }) {
      const { id } = params;
      delete watchList[Number(id)];
      return NextResponse.json(Object.values(watchList));
    }