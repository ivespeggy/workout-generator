export interface MuscleGroup {
    id: number
    name_en: string
    name_cn: string
    training_moves: string[]
    clicked: boolean
}

const musclesData: Record<number, MuscleGroup> = {
    0: {
        "id": 0,
        "name_en": "Deltoids",
        "name_cn": "斜方肌",
        "training_moves": [
          "Shoulder Press",
          "Lateral Raises",
          "Front Raises",
          "Upright Rows"
        ],
        "clicked": false
      },
      1: {
        "id": 1,
        "name_en": "Shoulders",
        "name_cn": "肩部",
        "training_moves": [
          "Military Press",
          "Arnold Press",
          "Shrugs",
          "Face Pulls"
        ],
        "clicked": false
      },
      2: {
        "id": 2,
        "name_en": "Chest",
        "name_cn": "胸部",
        "training_moves": [
          "Bench Press",
          "Push-Ups",
          "Dumbbell Flyes",
          "Chest Dips"
        ],
        "clicked": false
      },
      3: {
        "id": 3,
        "name_en": "Triceps",
        "name_cn": "三头肌",
        "training_moves": [
          "Tricep Dips",
          "Close-Grip Bench Press",
          "Tricep Pushdowns",
          "Skull Crushers"
        ],
        "clicked": false
      },
      4: {
        "id": 4,
        "name_en": "Biceps",
        "name_cn": "二头肌",
        "training_moves": [
          "Bicep Curls",
          "Hammer Curls",
          "Preacher Curls",
          "Chin-Ups"
        ],
        "clicked": false
      },
      5: {
        "id": 5,
        "name_en": "Forearms",
        "name_cn": "前臂",
        "training_moves": [
          "Wrist Curls",
          "Reverse Curls",
          "Farmers Walk",
          "Dead Hangs"
        ],
        "clicked": false
      },
      6: {
        "id": 6,
        "name_en": "Abs",
        "name_cn": "腹肌",
        "training_moves": [
          "Crunches",
          "Leg Raises",
          "Planks",
          "Russian Twists"
        ],
        "clicked": false
      },
      7: {
        "id": 7,
        "name_en": "Back",
        "name_cn": "背部肌肉",
        "training_moves": [
          "Deadlifts",
          "Pull-Ups",
          "Rows",
          "Lat Pulldowns"
        ],
        "clicked": false
      },
      8: {
        "id": 8,
        "name_en": "Lower Back",
        "name_cn": "下背肌肉",
        "training_moves": [
          "Hyperextensions",
          "Good Mornings",
          "Back Raises",
          "Romanian Deadlifts"
        ],
        "clicked": false
      },
      9: {
        "id": 9,
        "name_en": "Glutes",
        "name_cn": "臀部",
        "training_moves": [
          "Squats",
          "Lunges",
          "Hip Thrusts",
          "Bulgarian Split Squats"
        ],
        "clicked": false
      },
      10: {
        "id": 10,
        "name_en": "Quadriceps",
        "name_cn": "股四头肌",
        "training_moves": [
          "Leg Press",
          "Hack Squats",
          "Front Squats",
          "Step-Ups"
        ],
        "clicked": false
      },
      11: {
        "id": 11,
        "name_en": "Hamstrings",
        "name_cn": "腿筋",
        "training_moves": [
          "Romanian Deadlifts",
          "Hamstring Curls",
          "Glute-Ham Raises",
          "Sumo Deadlifts"
        ],
        "clicked": false
      },
      12: {
        "id": 12,
        "name_en": "Calves",
        "name_cn": "小腿肚",
        "training_moves": [
          "Calf Raises",
          "Seated Calf Raises",
          "Donkey Calf Raises",
          "Jump Rope"
        ],
        "clicked": false
      }

  }

export default musclesData