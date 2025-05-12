

export default function Progress ({vie}){


    return (
    <div className="progress" role="progressbar" aria-label="Danger example" aria-valuenow={vie} aria-valuemin={0} aria-valuemax={100}>
      <div className="progress-bar text-bg-warning" style={{ width: `${vie}%` }}>
      </div>
    </div>
  );
}
