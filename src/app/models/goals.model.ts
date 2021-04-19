import { goal, lifegoal, monthlygoal, quarterlygoal, sixmontsgoal, weeklygoal, yearlygoal } from "./goal.model";

export interface goals{
    goals: goal[]
}
export interface weeklyGoals{
    weeklyGoals: weeklygoal[]
}

export interface monthlygoals{
    monthlyGoals: monthlygoal[]
}
export interface quarterlygGoals{
    quarterlyGoals: Array<quarterlygoal>
}
export interface sixMothlyGoals{
    sixMonthlyGoals: Array<sixmontsgoal>
}
export interface yearlyGoals{
    yearlyGoals: Array<yearlygoal>
}
export interface lifeGoals{
    lifeGoals: Array<lifegoal>
}
