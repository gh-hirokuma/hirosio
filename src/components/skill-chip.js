import React from "react"

const getScoreColor = (score) => {
  if (score >= 90) return `bg-blue-600`
  if (score >= 80) return `bg-green-600`
  return `bg-yellow-600`
}

const SkillChip = ({
  name,
  desc,
  imgSrc,
  score,
  primaryColor,
  experienced,
}) => {
  return (
    <li
      className="w-full md:w-1/3 text-white"
      style={{
        backgroundColor: `${primaryColor}`,
      }}
    >
      <div className="flex items-center justify-between px-6 pt-5">
        <div className="flex flex-row items-center">
          <img
            className="w-12 h-12 object-cover rounded-full mr-4"
            alt={name}
            src={imgSrc}
          />
          <div className="flex flex-col justify-center">
            <p>{name}</p>
            <p className="text-xs text-gray-400 w-64 md:w-64 h-16 py-1 pr-2 md:pr-0">
              {desc}
            </p>
          </div>
        </div>
        <span
          className={`flex justify-center items-center w-12 h-12 ${getScoreColor(
            score
          )} rounded-full`}
        >
          {score}
        </span>
      </div>
      <div className="pb-4 px-6">
        <span className="text-xs bg-blue-600 py-1 px-2">
          Experienced: {experienced}
        </span>
      </div>
      <div className="relative">
        <div
          className={`absolute ${getScoreColor(score)} h-2 w-full`}
          style={{
            width: `${score}%`,
          }}
        ></div>
        <div className="bg-gray-900 h-2"></div>
      </div>
    </li>
  )
}

export default SkillChip
