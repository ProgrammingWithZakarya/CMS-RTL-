import React from "react";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
} from "recharts";

const data = [
    {
        name: "فروردین",
        uv: 4000,
        amt: 2400
    },
    {
        name: "اردیبهشت",
        uv: 3000,
        amt: 2210
    },
    {
        name: "خرداد",
        uv: -1000,
        amt: 2290
    },
    {
        name: "تیر",
        uv: 500,
        amt: 2000
    },
    {
        name: "مرداد",
        uv: -2000,
        amt: 2181
    },
    {
        name: "شهریور",
        uv: -250,
        amt: 2500
    },
    {
        name: "مهر",
        uv: 2490,
        amt: 2100
    },
    {
        name: "آبان",
        uv: 3590,
        amt: 2100
    },
    {
        name: "آذر",
        uv: 3490,
        amt: 2100
    },
    {
        name: "دی",
        uv: 3690,
        amt: 2100
    },
    {
        name: "بهمن",
        uv: 4290,
        amt: 2100
    },
    {
        name: "اسفند",
        uv: 3490,
        amt: 2100
    },
];

const gradientOffset = () => {
    const dataMax = Math.max(...data.map((i) => i.uv));
    const dataMin = Math.min(...data.map((i) => i.uv));

    if (dataMax <= 0) {
        return 0;
    }
    if (dataMin >= 0) {
        return 1;
    }

    return dataMax / (dataMax - dataMin);
};

const off = gradientOffset();

export default function Chart() {
    return (
        <div className="">
            <h3 className="font-bold mr-3 text-xl">گزارش درآمد</h3>
            <AreaChart
                width={600}
                height={300}
                data={data}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0
                }}
            >
                <CartesianGrid stroke="#0cc0c9"  strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis  style={{color  :"black"}}/>
                <Tooltip />
                <defs>
                    <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
                        <stop offset={off} stopColor="#0ba87b" stopOpacity={1} />
                        <stop offset={off} stopColor="red" stopOpacity={1} />
                    </linearGradient>
                </defs>
                <Area
                    type="monotone"
                    dataKey="uv"
                    stroke="#066046"
                    fill="url(#splitColor)"
                />
            </AreaChart>
        </div>
    );
}
