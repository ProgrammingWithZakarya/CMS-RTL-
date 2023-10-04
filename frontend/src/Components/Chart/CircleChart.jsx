import React, { useCallback, useState } from "react";
import { PieChart, Pie, Sector } from "recharts";

const data = [
    { name: "پیرانشهر", value: 125 },
    { name: "بانه", value: 487 },
    { name: "ارومیه", value: 156 },
    { name: "تهران", value: 452 }
];
const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const {
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        startAngle,
        endAngle,
        fill,
        payload,
        percent,
        value
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";

    return (
        <g>
            <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
                {payload.name}
            </text>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={'#077157'}
            />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={outerRadius + 6}
                outerRadius={outerRadius + 10}
                fill={'#077157'}
            />
            <path
                d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
                stroke={fill}
                fill="none"
            />
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke="#033023" />
            <text
                x={ex + (cos >= 0 ? 1 : -1) * 12}
                y={ey}
                textAnchor={textAnchor}
                fill="#000"
            >{`تعداد مشتری ها ${value}`}</text>
            <text
                x={ex + (cos >= 0 ? 1 : -1) * 12}
                y={ey}
                dy={18}
                textAnchor={textAnchor}
                fill="#222"
            >
                {`(درصد ${(percent * 100).toFixed(2)}%)`}
            </text>
        </g>
    );
};

export default function CircleChart() {
    const [activeIndex, setActiveIndex] = useState(0);
    const onPieEnter = useCallback(
        (_, index) => {
            setActiveIndex(index);
        },
        [setActiveIndex]
    );

    return (
        <div className="">
            <h3 className="font-bold mr-3 text-xl">بازدید کنندگان</h3>
            <PieChart width={400} height={400}>
                <Pie
                    activeIndex={activeIndex}
                    activeShape={renderActiveShape}
                    data={data}
                    cx={200}
                    cy={200}
                    innerRadius={90}
                    outerRadius={120}
                    fill="#0ba87b"
                    dataKey="value"
                    onMouseEnter={onPieEnter}
                />
            </PieChart>
        </div>
    );
}
