import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import Card from "../components/Card";

export default function Login() {
  const nav = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);

  const canSubmit = useMemo(() => {
    const e = email.trim();
    const p = password.trim();
    if (!e || !p) return false;
    if (!e.includes("@")) return false;
    return true;
  }, [email, password]);

  function onSubmit(e) {
    e.preventDefault();
    setErr("");

    if (!canSubmit) {
      setErr("Unesi ispravan email i lozinku.");
      return;
    }

    setBusy(true);
    setTimeout(() => {
      const user = { email: email.trim() };
      localStorage.setItem("demo_user", JSON.stringify(user));
      setBusy(false);
      nav("/"); 
    }, 700);
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: 16,
      }}
    >
      <div style={{ width: "min(420px, 100%)" }}>
        <Card>
          <h2 style={{ marginTop: 0 }}>Login</h2>

          <form onSubmit={onSubmit} style={{ display: "grid", gap: 10 }}>
            <div>
              <label>Email</label>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="npr. student@test.com"
                autoComplete="email"
              />
            </div>

            <div>
              <label>Lozinka</label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                autoComplete="current-password"
              />
            </div>

            {err && <div style={{ color: "crimson" }}>{err}</div>}

            <Button type="submit" disabled={!canSubmit || busy}>
              {busy ? "Prijavljivanje..." : "Uloguj se"}
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}
