function createPerson({ name = `New User`, skills = [] }) {
  return {
    name,
    skills,
    addSkill(newSkill) {
      if (this.skills.includes(newSkill)) {
        return this;
      }
      this.skills.push(newSkill);
      return this;
    },
    removeSkill(removeSkill) {
      const removeSkillIndex = this.skills.indexOf(removeSkill);
      if (removeSkillIndex === -1) {
        return this;
      }
      this.skills.splice(removeSkillIndex, 1);
      return this;
    },
    addName(newName) {
      this.name = newName;
      return this;
    },
  };
}