import subprocess
import time
import os

services = [
    ("gpt_service", 5005),
    ("code_debugger_service", 5010),
    #("code_translation_service", 5011),
    ("code_optimization_service", 5012),
    ("code_documentation_service", 5013),
    ("code_refactoring_service", 5014),
    ("code_review_service", 5015),
    ("code_explainer_service", 5016),
]

python_path = os.path.abspath("../myenv/Scripts/python.exe")
processes = []

print(f"\n Using Python from: {python_path}")
print(" Starting all services...\n")

for folder, port in services:
    print(f" Starting {folder} on port {port}")
    p = subprocess.Popen(
        [python_path, "main.py"],
        cwd=f"./{folder}",
        stdout=subprocess.PIPE,
        stderr=subprocess.STDOUT,
        universal_newlines=True
    )
    processes.append((folder, p))
    time.sleep(1)

print("\n All services started. Use CTRL+C to stop them.")
print(" Live output:")

try:
    while True:
        for name, proc in processes:
            output = proc.stdout.readline()
            if output:
                print(f"[{name}] {output.strip()}")
except KeyboardInterrupt:
    print("\n Stopping all services...")
    for _, p in processes:
        p.terminate()
