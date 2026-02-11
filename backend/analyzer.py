from roles import roles_data

def analyze_resume(text, role):
    skills = roles_data.get(role, [])

    found = []
    missing = []

    for s in skills:
        if s in text:
            found.append(s)
        else:
            missing.append(s)

    score = int(len(found) / len(skills) * 100) if skills else 0

    suggestions = []

    if "project" not in text:
        suggestions.append("Add project experience.")

    if "achieved" not in text:
        suggestions.append("Add measurable achievements.")

    return {
        "score": score,
        "found_skills": found,
        "missing_skills": missing,
        "suggestions": suggestions
    }
