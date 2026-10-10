# The Software Teaches Toolkit
By Becky Cole | Laracon AU 2026

## Start here
Choose one feature and test a difficult path. Use the checklist, examples, rewrite guide, matrix and worksheets to plan one improvement.

## Before-and-after examples

### Forms
Before: There were errors with your submission.
After: Select an incident location. For Lab Three, choose West Wing - Lab Three; we will fill the facility code and department for you.
Why: Explain success before the attempt. Derive facts the system already knows instead of testing whether users remember them.
Review: Do field guidance and backend rules describe the same requirement?

### Dashboards
Before: A blank table with no explanation.
After: No incidents match these filters. Clear filters to see all incidents you can access.
Why: Filtered results are a different state from no incidents, no access, loading or a failed request.
Review: Can the user tell which state they are in and what to do next?

### Permissions
Before: 403 Forbidden.
After: You do not have approval access. Request access or return to the list.
Why: Give an authorised route forward without revealing private record details.
Review: Is an access request actually available, and will sign-in or approval return the person to their task?

### Notifications
Before: Your request has been updated.
After: Your equipment request needs a decision. Review the request and approve or return it for changes.
Why: Name the change, the required action and its destination.
Review: Does this need history, a notification, a direct message, an urgent alert or escalation?

### API responses and outcomes
Before: SUCCESS.
After: Report 2026-0847 was submitted. First Aid: delivered, awaiting acknowledgement. Containment doors: failed to lock. Evacuate using the west stairwell.
Why: A saved report is not proof that every downstream action succeeded. Represent each outcome separately.
Review: Does each message reflect a state the system can verify?

## Error rewrite template
Situation: what happened?
Impact: what does this mean for the task?
Next action: what supported step can the user take?
Truth/privacy check: what can the system verify and what should stay private?

## Workflow worksheet
User and goal:
Step / what the user knows / what the system expects / feedback / next owner:
Failure -> supported recovery route:
Final outcome / next action / update due:
Improvement / owner / verification:

## Adaptation
These are fictional teaching examples, not claims about a production system. Offer only implemented actions and verified states. Keep backend rules authoritative and frontend guidance aligned.

Talk and resources: https://rebecca-de-winter.github.io/laracon.html